import React from "react";
import { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { fetchProducts } from '../../store/product/product.actions'

const Products = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts())
	})
	const { data } = useSelector((store) => { return { data: store.product.data } }, shallowEqual);
	return <div>
		{data?.map((p, i) => {
			<div key={i}>
				{p.name}
				{p.description}
			</div>
		})}
	</div>;
};

export default Products;
