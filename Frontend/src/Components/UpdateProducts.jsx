import { Link } from "react-router-dom";
import { useState } from "react";

const UpdateProducts = () => {
  const [form, setForm] = useState({
    prodName: "",
    desc: "",
    soda: 0,
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const minus = () => {
    if (form.soda > 0 && !isNaN(form.soda)) {
      setForm({ ...form, soda: form.soda - 1 });
    }
  };
  const plus = () => {
    if (!isNaN(form.soda) && form.soda <= 101) {
      setForm({ ...form, soda: form.soda + 1 });
    }
  };
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-1">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="prodName">Name</label>
                <input
                  type="text"
                  name="prodName"
                  id="prodName"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.prodName}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label for="desc">Description</label>
                <textarea
                  type="text"
                  name="desc"
                  id="desc"
                  className="border mt-1 rounded px-4 py-2 w-full bg-gray-50"
                  rows="4"
                  value={form.desc}
                  placeholder="Description"
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="sku">SKU</label>
                <input
                  type="text"
                  name="sku"
                  id="sku"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.sku}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productType">Product Type</label>
                <select
                  name="productType"
                  id="productType"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productType}
                  onChange={handleChange}
                >
                  {[
                    "Dairy",
                    "Fruits",
                    "Vegetables",
                    "Bakery",
                    "Beverages",
                    "Frozen",
                  ].map((item, index) => {
                    return (
                      <option value={item} key="index">
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="md:col-span-5">
                <label htmlFor="category">Categories</label>
                <select
                  name="category"
                  id="category"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.category}
                  onChange={handleChange}
                >
                  {[
                    "Dairy",
                    "Fruits",
                    "Vegetables",
                    "Bakery",
                    "Beverages",
                    "Frozen",
                  ].map((item, index) => {
                    return (
                      <option key={index} value={item}>
                        {item}...
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="md:col-span-2">
                <label for="soda">How many soda pops?</label>
                <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <button
                    tabindex="-1"
                    for="show_more"
                    className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    onClick={minus}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mx-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <input
                    name="soda"
                    id="soda"
                    placeholder="0"
                    className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                    type="number"
                    value={form.soda}
                    onChange={handleChange}
                  />
                  <button
                    tabindex="-1"
                    for="show_more"
                    className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
                    onClick={plus}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mx-2 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="https://www.buymeacoffee.com/dgauderman"
          target="_blank"
          className="md:absolute bottom-0 right-0 p-4 float-right"
        ></Link>
      </div>
    </div>
  );
};
export default UpdateProducts;
