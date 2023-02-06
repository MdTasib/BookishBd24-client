import ColumnGroup from "antd/es/table/ColumnGroup";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const EditBook = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    const editBook = {
      subject:data.subject,
      pageNumber: data.pageNumber,
      edition: data.edition,
      price: data.price,
      prePrice:data.prePrice,
      discount:data.discount
    }
    console.log(editBook);
    reset();

  }

  return (
    <div className='hero'>
      <Helmet>
				<meta charSet="utf-8"/>
				<title>EditBook | BookishBD24</title>
				<meta name="description" content="BookishBD24 website using React JS"/>
			</Helmet>
      <div className='hero-content w-full'>
        <div className='card w-full shadow-2xl bg-base-100'>
          <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
            <div className='form-control'>
              <div className=''>
                <h4 className="text-xl font-bold text-gray-800">Update Book</h4>

                {/* ............................... */}
                <div>
                  <div className="lg:grid md:grid grid-cols-2 gap-6">

                    <div className="w-full">
                      <label className='label'>
                        <span className='label-text'>বিষয়</span>
                      </label>
                      <input
                        {...register("subject", { required: true })}
                        type='text'
                        placeholder='বিষয়ের নাম লিখুন'
                        className='input input-bordered input-primary w-full max-w-xs'
                      />
                    </div>
                    <div>
                      <label className='label'>
                        <span className='label-text'>পৃষ্ঠাসমূহ</span>
                      </label>
                      <input
                        {...register("pageNumber", { required: true })}
                        type='number'
                        placeholder='পৃষ্ঠাসমূহ লিখুন'
                        className='input input-bordered input-primary w-full max-w-xs'
                      />
                    </div>


                    <div>
                      <label className='label'>
                        <span className='label-text'>সংস্করণ</span>
                      </label>
                      <input
                        {...register("edition", { required: true })}
                        type='text'
                        placeholder='সংস্করণ লিখুন'
                        className='input input-bordered input-primary w-full max-w-xs'
                      />
                    </div>

                    <div>
                      <label className='label'>
                        <span className='label-text'>মূল্য</span>
                      </label>
                      <input
                        {...register("price", { required: true })}
                        type='number'
                        placeholder='মূল্য লিখুন'
                        className='input input-bordered input-primary w-full max-w-xs'
                      />
                    </div>
                    <div>
                      <label className='label'>
                        <span className='label-text'>প্রাক মূল্য</span>
                      </label>
                      <input
                        {...register("prePrice", { required: true })}
                        type='number'
                        placeholder='প্রাক মূল্য লিখুন'
                        className='input input-bordered input-primary w-full max-w-xs'
                      />
                    </div>
                    <div>
                      <label className='label'>
                        <span className='label-text'>ডিসকাউন্ট</span>
                      </label>
                      <input
                        {...register("discount", { required: true })}
                        type='number'
                        placeholder='ডিসকাউন্ট'
                        className='input input-bordered input-primary w-full max-w-xs'
                      />
                    </div>
                  </div>
                </div>
                {/* ............................... */}
              </div>

            </div>

            <div className='form-control mt-6'>
              <button className='btn btn-primary'>UPLOAD</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default EditBook;
