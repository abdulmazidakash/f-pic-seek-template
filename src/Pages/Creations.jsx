
import { useEffect, useState } from 'react';
import PageTitle from '../components/shared/PageTitle';
import { Link } from 'react-router';

const Creations = () => {

	const [images, setImages] = useState([]);
	useEffect(()=>{
		fetch('http://localhost:5000/api/v1/image/all')
		.then(res=>res.json())
		.then((data) => setImages(data))
	}, [])
	return (
		<div>
			<PageTitle>All Creations</PageTitle>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
				{
				images.map((img)=> (
					<div key={img._id}>
						<div className="card bg-base-100 my-8 shadow-xl relative">
						<figure>
							<img
							src={img.thumb_img}
							alt="Shoes"
							className='w-full rounded-xl'
							 />
						</figure>
						<div className="card-body absolute bottom-[10px]">
					
							<Link to={`/creations/${img._id}`} className='btn btn-primary'>Details</Link>
				
						</div>
						</div>
					</div>
				))
				}
			</div>
		</div>
	);
};

export default Creations;