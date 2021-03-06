import { hours } from '../data'

export default function ReportTable(props) {
                                                                                          
  if (props.cookieStands.length === 0) {
    return(
      <h2 className='text-2xl p-6'>No Cookie Stands Available</h2>
    )
  } else{
    return(
      <table className='bg-green-500 rounded-md w-3/5'>
        <thead className="border border-black">
          <tr>
            <th className="border border-black">Location</th>
            {hours.map(hour => (
              <th key={hour} className="border border-black">
                {hour}
              </th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.cookieStands.map(stand => (
            <tr key={stand.location}>
              <td className="border border-black">{stand.location}</td>
              {stand.hourly_sales.map(sale => (
              <td key={sale}>
                {sale}
              </td>
              ))}
              <td>{stand.hourly_sales.reduce((previous, current) => previous + current, 0)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            {props.cookieStands[0].hourly_sales.map(sale => (
              <td key={sale}>{sale * props.cookieStands.length}</td>
            ))}
          </tr>
        </tfoot>
      </table>
    )
  }
}