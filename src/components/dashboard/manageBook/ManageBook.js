import React from 'react';
import { useState } from 'react';
import { products } from '../../../data/data';
import EditModal from './EditModal';

const ManageBook = () => {
    const [modal, setModal] = useState(false);

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
                            <td><button for="edit-modal" className="bg-primary px-3 rounded text-white" onClick={()=>setModal(!modal)}>
                                Edit
                            </button></td>
                        </tr>)
                    }

                </tbody>
            </table>
            {
                modal && <EditModal/>
            }
        </div>
    );
};

export default ManageBook;