import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  title: string;
  price: number;
  stock: number;
  description: string;
  categoryId: number;
  images: FileList;
};

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { stock: 0 },
  });

  const [categories, setCategories] = useState<{ title: string; id: number }[]>(
    [],
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((res) => setCategories(res.data.data));
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    setLoading(true);

    // console.log(12);
    // console.log(data.price);
    // return;
    try {
      const formData = new FormData();
      formData.append("title", data.title.trim());
      formData.append("price", data.price as unknown as string);
      formData.append("stock", String(data.stock ?? 0));
      formData.append("description", data.description?.trim() ?? "");
      formData.append("categoryId", String(data.categoryId));

      if (data.images) {
        for (let i = 0; i < data.images.length; i++) {
          formData.append("images", data.images[i]);
        }
      }

      await axios.post("http://localhost:4000/api/products", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      toast("product create!");
      reset();
    } catch (err) {
      toast("somethig went wrong..");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const inputCls = () =>
    `w-full rounded-lg border px-3 py-2 text-sm text-gray-900 placeholder-gray-400
     focus:outline-none focus:ring-2 transition-shadow border-gray-200 focus:ring-indigo-200 focus:border-indigo-400`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">New product</h1>
          <p className="mt-1 text-sm text-gray-500">
            Fill in the details below to add a product to your catalogue.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100"
        >
          <div className="px-6 py-5 space-y-5">
            {/* Title */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                {...register("title", { required: "Title is required." })}
                type="text"
                placeholder="e.g. Wireless Headphones"
                maxLength={255}
                className={inputCls()}
              />
              {errors.title && (
                <p className="text-xs text-red-600">{errors.title.message}</p>
              )}
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select {...register("categoryId")} className={inputCls()}>
                {categories.map((c) => (
                  <option value={c.id} key={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Price + Stock */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Price (USD) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    $
                  </span>
                  <input
                    {...register("price", {
                      required: "Price is required.",
                      min: { value: 0, message: "Price must be positive." },
                      validate: (v) =>
                        /^\d+(\.\d{1,2})?$/.test(String(v)) ||
                        "At most 2 decimal places.",
                    })}
                    type="number"
                    placeholder="0.00"
                    min={0}
                    step="0.01"
                    className={inputCls() + " pl-7"}
                  />
                </div>
                {errors.price && (
                  <p className="text-xs text-red-600">{errors.price.message}</p>
                )}
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Stock
                  </label>
                  <span className="text-xs text-gray-400">Defaults to 0</span>
                </div>
                <input
                  {...register("stock", {
                    min: { value: 0, message: "Stock must be non-negative." },
                  })}
                  type="number"
                  placeholder="0"
                  min={0}
                  step={1}
                  className={inputCls()}
                />
                {errors.stock && (
                  <p className="text-xs text-red-600">{errors.stock.message}</p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <div className="flex items-baseline justify-between">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <span className="text-xs text-gray-400">Optional</span>
              </div>
              <textarea
                {...register("description")}
                placeholder="Describe your product…"
                rows={3}
                className={inputCls() + " resize-none"}
              />
            </div>
          </div>

          {/* Images */}
          <div className="px-6 py-4">
            <input {...register("images")} type="file" multiple />
          </div>

          {/* Success / Error feedback */}

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 rounded-b-xl flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                reset();
              }}
              className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Creating…" : "Create product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
