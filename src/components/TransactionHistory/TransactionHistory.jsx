import PropTypes from 'prop-types';
import { TransactionItem } from '../TransactionItem/TransactionItem';
import { TransactionTable } from '../TransactionHistory/TransactionHistory.styled';



export const TransactionHistory = ({ items }) => { 

	const TableHeader = () => (
		<thead>
		  <tr>
			<th>Type</th>
			<th>Amount</th>
			<th>Currency</th>
		  </tr>
		</thead>
	  );

	if(items.length===0){
		return "Transactions history is clear";
	}
	return (
    <TransactionTable><TableHeader></TableHeader>
	<tbody>
      	{  
			items.map(({ id, type, amount, currency }) => (
				<TransactionItem
					key={id}
					type={type}
					amount={amount}
					currency={currency}
				/>
			))
		}
	</tbody></TransactionTable>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.exact({
		id: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
		})
  ).isRequired,
};


