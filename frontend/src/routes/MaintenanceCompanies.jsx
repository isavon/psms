import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";

export default function MaintenanceCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = () => {
    setLoading(true);
    axiosClient.get("/maintenance-company")
      .then(({ data }) => {
        setLoading(false);
        setCompanies(data.data);
      })
      .catch(() => {
        setLoading(false);
      })
      ;
  }

  const onDelete = (id) => {
    if (!window.confirm("Ви впевнені, що хочете видалити цю компанію?")) {
      return;
    }

    axiosClient.delete(`/maintenance-company/${id}`)
      .then(() => {
        getCompanies();
      })
      ;
  }

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Компанії з технічного обслуговування</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/maintenance-companies/create" className="btn btn-success btn-sm" title="Додати компанію">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="table-responsive small">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Назва</th>
              <th scope="col">Адреса</th>
              <th scope="col">Телефон</th>
              <th scope="col">Спеціалізація</th>
              <th scope="col">Створена</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {loading &&
            <tbody>
              <tr>
                <td colSpan={7} className="text-center">Завантаження...</td>
              </tr>
            </tbody>
          }
          {!loading &&
            <tbody>
              {companies.map(company => (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.address}</td>
                  <td>{company.number}</td>
                  <td>{company.specialization}</td>
                  <td>{company.created_at}</td>
                  <td>
                    <Link to={'/maintenance-companies/' + company.id} className="btn btn-primary btn-sm" title="Редагувати">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"></path>
                      </svg>
                    </Link>
                    &nbsp;
                    <button className="btn btn-danger btn-sm" title="Видалити?" onClick={e => onDelete(company.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"></path>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
    </>
  );
}