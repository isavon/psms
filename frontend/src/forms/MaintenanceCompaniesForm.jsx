import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";

export default function MaintenanceCompaniesForm() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const navigator = useNavigate();
  const [company, setCompany] = useState({
    id: null,
    name: '',
    address: '',
    number: '',
    specialization: '',
  });

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient.get(`/maintenance-company/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setCompany(data);
        })
        .catch(() => {
          setLoading(false);
        })
        ;
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (company.id) {
      axiosClient.put(`/maintenance-company/${company.id}`, company)
        .then(() => {
          navigator("/maintenance-companies");
        })
        .catch(err => {
          const { response } = err;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        })
        ;
    } else {
      axiosClient.post("/maintenance-company", company)
        .then(() => {
          navigator("/maintenance-companies");
        })
        .catch(err => {
          const { response } = err;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        })
        ;
    }
  }

  return (
    <>
      {loading &&
        <div className="text-center mt-5"><h3>Завантаження...</h3></div>
      }
      {!loading &&
        <>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">{company.id ? "Редагування компанії" : "Нова компанія"}</h1>
          </div>
          <div className="card w-50">
            <form onSubmit={onSubmit}>
              <div className="card-body">
                {errors &&
                  <div className="alert alert-danger" role="alert">
                    {Object.keys(errors).map(key => (
                      <p key={key}>{errors[key][0]}</p>
                    ))}
                  </div>
                }
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Назва</label>
                  <input value={company.name} onChange={e => setCompany({ ...company, name: e.target.value })} className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">Адреса</label>
                  <input value={company.address} onChange={e => setCompany({ ...company, address: e.target.value })} className="form-control" id="address" />
                </div>
                <div className="mb-3">
                  <label htmlFor="number" className="form-label">Телефон</label>
                  <input value={company.number} onChange={e => setCompany({ ...company, number: e.target.value })} className="form-control" id="number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="specialization" className="form-label">Спеціалізація</label>
                  <input value={company.specialization} onChange={e => setCompany({ ...company, specialization: e.target.value })} className="form-control" id="specialization" />
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Зберегти</button>
                <Link to="/maintenance-companies" className="btn btn-secondary float-end">Назад</Link>
              </div>
            </form>
          </div>
        </>
      }
    </>
  );
}