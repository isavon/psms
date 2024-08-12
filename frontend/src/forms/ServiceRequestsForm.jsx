import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";

export default function ServiceRequestsForm() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [companies, setCompanies] = useState([]);
  const [aircrafts, setServices] = useState([]);
  const navigator = useNavigate();
  const [service, setService] = useState({
    id: null,
    aircraft_id: '',
    issue: '',
    priority: '',
    due_date: '',
    maintenance_company_id: '',
    status: '',
  });

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient.get(`/service-request/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setService(data);
        })
        .catch(() => {
          setLoading(false);
        })
        ;
    }

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

    setLoading(true);
    axiosClient.get("/aircraft")
      .then(({ data }) => {
        setLoading(false);
        setServices(data.data);
      })
      .catch(() => {
        setLoading(false);
      })
      ;
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (service.id) {
      axiosClient.put(`/service-request/${service.id}`, service)
        .then(() => {
          navigator("/service-requests");
        })
        .catch(err => {
          const { response } = err;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        })
        ;
    } else {
      axiosClient.post("/service-request", service)
        .then(() => {
          navigator("/service-requests");
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
            <h1 className="h2">{service.id ? "Редагування запиту" : "Новий запит"}</h1>
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
                  <label htmlFor="aircraft_id" className="form-label">Повітряне судно</label>
                  <select value={service.aircraft_id} onChange={e => setService({ ...service, aircraft_id: e.target.value })} id="aircraft_id" className="form-select">
                    <option value="">Виберіть...</option>
                    {aircrafts.map(aircraft => (
                      <option value={aircraft.id} key={aircraft.id}>{aircraft.model}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="issue" className="form-label">Опис проблеми</label>
                  <textarea value={service.issue} onChange={e => setService({ ...service, issue: e.target.value })} className="form-control" id="issue" rows="5" />
                </div>
                <div className="mb-3">
                  <label htmlFor="priority" className="form-label">Приорітет</label>
                  <select value={service.priority} onChange={e => setService({ ...service, priority: e.target.value })} id="priority" className="form-select">
                    <option value="">Виберіть...</option>
                    <option value="low">Низький</option>
                    <option value="medium">Середній</option>
                    <option value="high">Високий</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="due_date" className="form-label">Дата виконання</label>
                  <input value={service.due_date} onChange={e => setService({ ...service, due_date: e.target.value })} className="form-control" id="due_date" />
                </div>
                <div className="mb-3">
                  <label htmlFor="maintenance_company_id" className="form-label">Компанія з технічного обслуговування</label>
                  <select value={service.maintenance_company_id} onChange={e => setService({ ...service, maintenance_company_id: e.target.value })} id="maintenance_company_id" className="form-select">
                    <option value="">Виберіть...</option>
                    {companies.map(company => (
                      <option value={company.id} key={company.id}>{company.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Статус</label>
                  <select value={service.status} onChange={e => setService({ ...service, status: e.target.value })} id="status" className="form-select">
                    <option value="">Виберіть...</option>
                    <option value="awaits">Очікує</option>
                    <option value="in progress">В процесі</option>
                    <option value="completed">Завершено</option>
                  </select>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Зберегти</button>
                <Link to="/service-requests" className="btn btn-secondary float-end">Назад</Link>
              </div>
            </form>
          </div>
        </>
      }
    </>
  );
}