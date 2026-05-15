import axios from "axios";
import { useState, useEffect } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";

const initialForm = {
  title: "",
  price: "",
  stock: "",
  description: "",
  categoryId: null,
};

export default function CreateProduct() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [categories, setCategories] = useState<{ title: string; id: number }[]>(
    [],
  );
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((res) => setCategories(res.data.data));
  }, []);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  async function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const errs: Record<string, string> = {};
    if (!form.title.trim()) errs.title = "Title is required.";
    const price = parseFloat(form.price);
    if (!form.price) errs.price = "Price is required.";
    else if (isNaN(price) || price < 0)
      errs.price = "Price must be a positive number.";
    else if (!/^\d+(\.\d{1,2})?$/.test(form.price))
      errs.price = "Price can have at most 2 decimal places.";
    const stock = parseInt(form.stock, 10);
    if (form.stock !== "" && (isNaN(stock) || stock < 0))
      errs.stock = "Stock must be a non-negative integer.";

    if (Object.keys(errs).length) return setErrors(errs);

    setLoading(true);
    setSuccess(false);
    setServerError(null);

    try {
      let images = (
        e.currentTarget.elements.namedItem("images") as HTMLInputElement
      ).files;

      console.log(images);
      const formData = new FormData();
      formData.append("title", form.title.trim());
      formData.append(
        "price",
        String(parseFloat(parseFloat(form.price).toFixed(2))),
      );
      formData.append("stock", form.stock !== "" ? String(stock) : "0");
      formData.append("description", form.description.trim());
      formData.append("categoryId", form.categoryId);

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      await axios.post("http://localhost:4000/api/products", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setForm(initialForm);
      setErrors({});
      setSuccess(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }

  const inputCls = (field: string) =>
    `w-full rounded-lg border px-3 py-2 text-sm text-gray-900 placeholder-gray-400
     focus:outline-none focus:ring-2 transition-shadow
     ${errors[field] ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-indigo-200 focus:border-indigo-400"}`;

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
          onSubmit={handleSubmit}
          noValidate
          className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100"
        >
          <div className="px-6 py-5 space-y-5">
            {success && (
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
                Product created successfully.
              </div>
            )}
            {serverError && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {serverError}
              </div>
            )}

            {/* Title */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Wireless Headphones"
                maxLength={255}
                className={inputCls("title")}
              />
              {errors.title && (
                <p className="text-xs text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Category */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="categoryId"
                onChange={handleChange}
                className={inputCls("category")}
              >
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
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    min={0}
                    step="0.01"
                    className={inputCls("price") + " pl-7"}
                  />
                </div>
                {errors.price && (
                  <p className="text-xs text-red-600">{errors.price}</p>
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
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min={0}
                  step={1}
                  className={inputCls("stock")}
                />
                {errors.stock && (
                  <p className="text-xs text-red-600">{errors.stock}</p>
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
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your product…"
                rows={3}
                className={inputCls("description") + " resize-none"}
              />
            </div>
          </div>

          {/* Images */}
          <div className="px-6 py-4">
            <input name="images" type="file" multiple />
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 rounded-b-xl flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setForm(initialForm);
                setErrors({});
                setSuccess(false);
                setServerError(null);
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
