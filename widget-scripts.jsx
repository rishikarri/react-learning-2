var products = [
	{
		category: 'Sporting Goods',
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true

	},
	{
		category: 'Sporting Goods',
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]

function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props){
		if(props.product.inStock == true){
			var productClass = "black"
		}else{
			var productClass = "red"
		}
		return(
			<tr>
				<td className={productClass}>{props.product.name}</td>
				<td className={productClass}>{props.product.price}</td>
			</tr>	
		)
		
}

function ProductTable(props){
	//init a local var to hold all of our rows
	var rows = []; 
	// init a local var to keep track of what category we are on 
	var lastCategory = ""; 
	var key = 0; 

	products.forEach(function(product, index){
		if(product.category !== lastCategory){
			//we need to add this to our rows array because it's a new category
			rows.push(<ProductCategoryRow key={key} category={product.category} />) 
			lastCategory = product.category;
			key++;
		}
		rows.push(<ProductRow key={key} product={product} />)
		key++;
	})


	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>

			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar(props){
	return(
		<form class="search-bar">
			<input type="text" placeholder="Search..."/>
			<div>
				<input type="checkbox" />&nbsp;Only show products in stock
			</div>
		</form>

	)
}

// class SearchBar extends React.Component{

// }

// We aren't using class yet so we have to include props as a param 

function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable products={props.products} />
		</div>
	)
}

function Application(props){
	return(
		<FilterableProductTable products={props.products} />
	)
}


ReactDOM.render(
	<Application products={products} />,
	document.getElementById('container')
)