import "./ShowData.css";

import PropTypes from 'prop-types';

const ShowData = ({submittedData}) => {
  return (
    <div className="data-grid">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone Number</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {submittedData?.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.startDate}</td>
              <td>{data.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ShowData.propTypes = {
  submittedData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ShowData;
