import { useState } from "react";
import './Video10.css';

export interface IUser {
    name: string
    age: number | string
    city: string
}

const Video10 = () => {
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number | string>('')
    const [selectCity, setSelectCity] = useState<string>('Hà Nội')

    const [city, setCity] = useState<string[]>(["Hà Nội", "Đà Nẵng", "Hồ Chí Minh"]);
    const [isShowBtn, setIsShowBtn] = useState<boolean>(false);

    const [users, setUsers] = useState<IUser[]>([
        { name: "Eric", age: 25, city: "Hà Nội" },
        { name: "Eric1", age: 26, city: "Đà Nẵng" },
        { name: "Eric2", age: 27, city: ''},
    ])


    const handleOnClick = () => {
        const newUser: IUser = {
            name,
            age,
            city: selectCity
        }
        setUsers(prev => [...prev, newUser])
    }

    // const user: IUser = users[0]
    // const { name: newName }: IUser = user
    // console.log('Name:', newName);
    
    return (
        <>
            <div>Example video 10:  hello world </div>
            <div className="form-user">
                <div>
                    <label>Name:</label><br />
                    <input onChange={(e) => setName(e.target.value)} type="text" value={name} /><br />
                </div>
                <div>
                    <label >Age:</label><br />
                    <input onChange={(e) => setAge(e.target.value)} type="text" value={age} /><br />
                </div>
                <div>
                    <label>City:</label><br />
                    <select onChange={(e) => setSelectCity(e.target.value)}>
                        {city.map(item => (
                            <option value={item}>{item}</option>
                        ))}
                    </select>
                </div>

                <input onClick={() => handleOnClick()} type="submit" value="Submit" />
            </div>
            <hr />
            <div>List Users:</div>
            <div className="table-user">
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item: IUser) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Video10