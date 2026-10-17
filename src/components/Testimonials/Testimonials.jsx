import React from 'react'
import {useState, useEffect} from 'react'
import "./Testimonials.css";
import nik from"../../assets/image1.jpg";
import tag from "../../assets/image 2.jpg";
import kin from "../../assets/gettyimages-1278977922-170667a.jpg";
import axios from "axios";

const Testimonials = () => {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

const getusers = async () => {
    try{
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
        setLoading(false);
        console.log(res.data)
    } catch(error) {
     setLoading(false);
    }
};
  useEffect(() => {
    getusers();
  }, [])
  return (
    <div>
       {/* <!--TESTIMONY--> */}
    <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2> what our students says</h2>
        <div className="testimonials-container">
            {users.map((user) => (
            <div className="card" key={user.id}>
                <img src={nik} alt=" testiomnials"/>
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
                <h3>username:{user.username}</h3>
                <p> This academy changed my life, i learnt fullstack and i designed my own website that gives me lots of income. I also got a job with a health sector in the UK that gets me paid in dollars</p>
            </div>
        ))}
        </div>
    </section>
    </div>
  )
}

export default Testimonials
