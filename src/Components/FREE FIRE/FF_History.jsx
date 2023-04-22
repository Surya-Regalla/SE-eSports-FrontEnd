import React, {useEffect, useState} from "react";
import Navbar2 from "../Navbar/Navbar2";
import "../Component_Styles/points_Table.css"

import axios, * as others from 'axios';

export default function History()
{
    const [items, setItems] = useState([]);

    useEffect(()=> {
        // axios.get("http://localhost:8080/ff-tourni-end").then((res) => {
        //   setItems(res.data);
        // });

        axios.get("https://esports-server.onrender.com/ff-tourni-end").then((res) => {
          setItems(res.data);
        });
    }, []);

    return (
        <div>
            <Navbar2 />
            <div className="background-p">
                {items.map((tourni, index1) => (
                    <div className="points">
                    <p className="os-text">OVERALL STANDINGS </p>
                    <p className="tourney-date"> Tournament started on {tourni.date} </p>
                    <table>
                        <thead>
                            <tr >
                                <th className="main-col2">Team Name</th>
                                <th  className="main-col">Standing Points</th>
                                <th className="main-col">Kill Points</th>
                                <th  className="main-col3">Total Points</th>
                            </tr>
                        </thead>

                        <tbody>
                            {tourni.points.map((single, index) => (
                                <tr className="points-row">
                                    <td className="points-col">{single.teamname}</td>
                                    <td className="points-col">{single.ppoints}</td>
                                    <td className="points-col">{single.kpoints}</td>
                                    <td className="points-col">{single.tpoints}</td>
                                </tr>
                            ))}
                                
                        </tbody>
                    </table>

                </div>
                ))}
            </div>
            
        </div>
    )
}