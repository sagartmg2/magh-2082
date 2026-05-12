import { useState, ChangeEvent, FormEvent } from "react";

interface ProductForm {
  title: string;
  price: string;
  stock: string;
  description: string;
}

interface FormErrors {
  title?: string;
  price?: string;
  stock?: string;
}

const initialForm: ProductForm = {
  title: "",
  price: "",
  stock: "",
  description: "",
};

export default function CreateProduct() {
  const [form, setForm] = useState<ProductForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // ── Validation ──────────────────────────────────────────────────────────────
  function validate(): FormErrors {
    const errs: FormErrors = {};

    if (!form.title.trim()) {
      errs.title = "Title is required.";
    }

    const price = parseFloat(form.price);
    if (!form.price) {
      errs.price = "Price is required.";
    } else if (isNaN(price) || price < 0) {
      errs.price = "Price must be a positive number.";
    } else if (!/^\d+(\.\d{1,2})?$/.test(form.price)) {
      errs.price = "Price can have at most 2 decimal places.";
    }

    const stock = parseInt(form.stock, 10);
    if (form.stock !== "" && (isNaN(stock) || stock < 0)) {
      errs.stock = "Stock must be a non-negative integer.";
    }

    return errs;
  }

  // ── Handlers ─────────────────────────────────────────────────────────────────
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSuccess(false);
    setServerError(null);

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        title: form.title.trim(),
        price: parseFloat(parseFloat(form.price).toFixed(2)),
        stock: form.stock !== "" ? parseInt(form.stock, 10) : 0,
        description: form.description.trim() || null,
      };

      const res = await fetch("/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? `Server error: ${res.status}`);
      }

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

  // ── UI ───────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            New product
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Fill in the details below to add a product to your catalogue.
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100"
        >
          <div className="px-6 py-5 space-y-5">
            {/* Success banner */}
            {success && (
              <div className="flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Product created successfully.
              </div>
            )}

            {/* Server error banner */}
            {serverError && (
              <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                <svg
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                  />
                </svg>
                {serverError}
              </div>
            )}

            {/* Title */}
            <Field label="Title" required error={errors.title}>
              <input
                id="title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Wireless Headphones"
                maxLength={255}
                className={inputClass(!!errors.title)}
              />
            </Field>

            {/* Price + Stock */}
            <div className="grid grid-cols-2 gap-4">
              <Field label="Price (USD)" required error={errors.price}>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none">
                    $
                  </span>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    min={0}
                    step="0.01"
                    className={inputClass(!!errors.price) + " pl-7"}
                  />
                </div>
              </Field>

              <Field label="Stock" error={errors.stock} hint="Defaults to 0">
                <input
                  id="stock"
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min={0}
                  step={1}
                  className={inputClass(!!errors.stock)}
                />
              </Field>
            </div>

            {/* Description */}
            <Field label="Description" hint="Optional">
              <textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your product…"
                rows={3}
                className={inputClass(false) + " resize-none"}
              />
            </Field>
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
              className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Creating…
                </>
              ) : (
                "Create product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-lg border px-3 py-2 text-sm text-gray-900 placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-offset-0 transition-shadow",
    hasError
      ? "border-red-400 focus:ring-red-200"
      : "border-gray-200 focus:ring-indigo-200 focus:border-indigo-400",
  ].join(" ");
}

interface FieldProps {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, required, hint, error, children }: FieldProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
        {hint && !error && (
          <span className="text-xs text-gray-400">{hint}</span>
        )}
      </div>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}
