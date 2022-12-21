import Records from '../data/data.json';

function API() {
  return (
    <div className="">
      {Records.map((record) => {
        return (
          <pre className="container mt-3">
            <p>ID: {record.id}</p>
            <p>Copyright: {record.copyright}</p>
            <p>Date: {record.date}</p>
            <p>
              Explanation: <br />
              {record.explanation}
            </p>
            <p>Title: {record.title}</p>
            <p>
              <img src={record.url} alt="" width="100" />
            </p>
          </pre>
        );
      })}
    </div>
  );
}

export default API;
