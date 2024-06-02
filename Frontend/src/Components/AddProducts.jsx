import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AddProducts = () => {
const [product, setProduct] = useState([])
const reqOptions = {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body:JSON.stringify({title: 'post request'})
}
  useEffect(()=>{
    fetch('http://localhost:5000/api/product/create', reqOptions)
    .then(res => res.json())
    .then(res => setProduct(res.data))
  })
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
            <form onSubmit={this.handleSubmit}>
              <div className="md:col-span-5">
              <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productName}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productDescription">Product Description</label>
                <textarea
                  type="text"
                  name="productDescription"
                  id="productDescription"
                  className="border mt-1 rounded px-4 py-2 w-full bg-gray-50"
                  rows="4"
                  value={form.productDescription}
                  placeholder="Product Description"
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productPrice">Product Price</label>
                <input
                  type="number"
                  name="productPrice"
                  id="productPrice"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productPrice}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productStock">Product Stock</label>
                <input
                  type="number"
                  name="productStock"
                  id="productStock"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productStock}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productCategory">Product Category</label>
                <input
                  type="text"
                  name="productCategory"
                  id="productCategory"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productCategory}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productCompany">Product Company</label>
                <input
                  type="text"
                  name="productCompany"
                  id="productCompany"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productCompany}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productDiscount">Product Discount</label>
                <input
                  type="number"
                  name="productDiscount"
                  id="productDiscount"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productDiscount}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="productRating">Product Rating</label>
                <input
                  type="number"
                  name="productRating"
                  id="productRating"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.productRating}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-5">
                <label htmlFor="isFeatured">Is Featured</label>
                <select
                  name="isFeatured"
                  id="isFeatured"
                  className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  value={form.isFeatured}
                  onChange={handleChange}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
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
              </form>
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
export default AddProducts;
