import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";

export default function AircraftForm() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [companies, setCompanies] = useState([]);
  const navigator = useNavigate();
  const [aircraft, setAircraft] = useState({
    id: null,
    model: '',
    serial_number: '',
    registration: '',
    id_maintenance_company: '',
  });

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient.get(`/aircraft/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setAircraft(data);
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
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (aircraft.id) {
      axiosClient.put(`/aircraft/${aircraft.id}`, aircraft)
        .then(() => {
          navigator("/aircraft");
        })
        .catch(err => {
          const { response } = err;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        })
        ;
    } else {
      axiosClient.post("/aircraft", aircraft)
        .then(() => {
          navigator("/aircraft");
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
            <h1 className="h2">{aircraft.id ? "Редагування повітрянного судна" : "Нове повітряне судно"}</h1>
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
                  <label htmlFor="model" className="form-label">Модель</label>
                  <input value={aircraft.model} onChange={e => setAircraft({ ...aircraft, model: e.target.value })} className="form-control" id="model" />
                </div>
                <div className="mb-3">
                  <label htmlFor="serial_number" className="form-label">Серійний номер</label>
                  <input value={aircraft.serial_number} onChange={e => setAircraft({ ...aircraft, serial_number: e.target.value })} className="form-control" id="serial_number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="registration" className="form-label">Реєстрація</label>
                  <input value={aircraft.registration} onChange={e => setAircraft({ ...aircraft, registration: e.target.value })} className="form-control" id="registration" />
                </div>
                <div className="mb-3">
                  <label htmlFor="id_maintenance_company" className="form-label">Компанія з технічного обслуговування</label>
                  <select value={aircraft.id_maintenance_company} onChange={e => setAircraft({ ...aircraft, id_maintenance_company: e.target.value })} id="id_maintenance_company" className="form-select">
                    <option value="">Виберіть...</option>
                    {companies.map(company => (
                      <option value={company.id} key={company.id}>{company.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Зберегти</button>
                <Link to="/aircraft" className="btn btn-secondary float-end">Назад</Link>
              </div>
            </form>
          </div>
        </>
      }
    </>
  );
}