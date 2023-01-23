import { useForm } from "react-hook-form";

const EditModal = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="fixed top-16 left-72 w-[700px] ">
      <div className='hero'>
        <div className='hero-content w-full'>
          <div className='card w-full shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit()} className='card-body'>
              <div className='form-control'>
                <h4 className="text-xl font-bold text-gray-800 text-center">Update Book</h4>
                <div className=''>

                  {/* ............................... */}
                  <div>
                    <div className="grid grid-cols-2 gap-6">

                      <div className="w-full">
                        <label className='label'>
                          <span className='label-text'>Subject</span>
                        </label>
                        <input
                          {...register("text", { required: true })}
                          type='text'
                          placeholder='Enter Subject'
                          className='input input-bordered input-primary w-full max-w-xs'
                        />
                      </div>
                      <div>
                        <label className='label'>
                          <span className='label-text'>Pages</span>
                        </label>
                        <input
                          {...register("number", { required: true })}
                          type='number'
                          placeholder='Enter Pages'
                          className='input input-bordered input-primary w-full max-w-xs'
                        />
                      </div>


                      <div>
                        <label className='label'>
                          <span className='label-text'>Edition</span>
                        </label>
                        <input
                          {...register("text", { required: true })}
                          type='text'
                          placeholder='Enter Edition'
                          className='input input-bordered input-primary w-full max-w-xs'
                        />
                      </div>

                      <div>
                        <label className='label'>
                          <span className='label-text'>Price</span>
                        </label>
                        <input
                          {...register("price", { required: true })}
                          type='number'
                          placeholder='Enter Price'
                          className='input input-bordered input-primary w-full max-w-xs'
                        />
                      </div>
                      <div>
                        <label className='label'>
                          <span className='label-text'>Pre Price</span>
                        </label>
                        <input
                          {...register("price", { required: true })}
                          type='number'
                          placeholder='Enter Pre price'
                          className='input input-bordered input-primary w-full max-w-xs'
                        />
                      </div>
                      <div>
                        <label className='label'>
                          <span className='label-text'>Discount</span>
                        </label>
                        <input
                          {...register("text", { required: true })}
                          type='text'
                          placeholder='Enter Pre price'
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
    </div>
  )
}
export default EditModal;
