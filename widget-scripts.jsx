var products = [
	{
		category: 'Sporting Goods',
		price: '$49:99',
		name: 'Football',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$9:99',
		name: 'Baseball',
		inStock: true

	},
	{
		category: 'Sporting Goods',
		price: '$29:99',
		name: 'Basketball',
		inStock: true
	},

	{
		category: 'Electronics',
		price: '$99:99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',
		price: '$399:99',
		name: 'iPhone 5',
		inStock: true
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
			<td>Sporting Goods</td>
		</tr>
	)
}

function ProductRow(props){
		return(
			<tr>
				<td>Football</td>
				<td>$19.99</td>
			</tr>	
		)
		
}

function ProductTable(props){
	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>

			<tbody>
				<ProductCategoryRow />
				<ProductRow />
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
			<ProductTable products={props.products}/>
		</div>
	)
}

function Application(props){
	return(
		<FilterableProductTable products={props.products}/>
	)
}


ReactDOM.render(
	<Application products={products} />,
	document.getElementById('container')
)