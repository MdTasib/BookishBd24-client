import React from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../../../data/data';

const ManageBook = () => {
    const navigate = useNavigate();

    const editBook = () => {
        navigate("/dashboard/edit-book")
    }

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>PreVPrice</th>
                        <th>Price</th>
                        <th>Author</th>
                        <th>Remove Book</th>
                        <th>Update Book</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((item, index) => <tr>
                            <th>{index + 1}</th>
                            <td><img className='h-8' src={item.image} alt="" /></td>
                            <td>{item.name}</td>
                            <td>${item.prevPrice}</td>
                            <td>{item.price}</td>
                            <td>{item.author}</td>
                            <td><button
                                className="bg-red-500 px-2 rounded text-white">
                                Delete
                            </button></td>
                            <td><button for="edit-modal" className="bg-primary px-3 rounded text-white" onClick={()=>editBook()}>
                                Edit
                            </button></td>
                        </tr>)
                    }

                </tbody>
            </table>
            {/* {
                modal && <EditModal/>
            } */}
        </div>
    );
};

export default ManageBook;