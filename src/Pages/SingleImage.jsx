import { useEffect, useState } from "react";
import PageTitle from "../components/shared/PageTitle";
import { useParams } from "react-router";


const SingleImage = () => {

		const {id} = useParams();
		const [image, setImage] = useState([]);
		useEffect(()=>{
			fetch(`${import.meta.env.VITE_API}/api/v1/image/single/${id}`)
			.then(res=>res.json())
			.then((data) => setImage(data))
		}, [id])
	return (
		<div>
			<PageTitle>{image?.prompt}</PageTitle> 
			<div className="w-11/12 mx-auto">
				<figure className="my-5 p-1 flex justify-center">
					<img 
					src={image?.original_img || 'not found this image'} 
					alt=""
					className="rounded-md"
					 />
				</figure>
			</div>
		</div>
	);
};

export default SingleImage;