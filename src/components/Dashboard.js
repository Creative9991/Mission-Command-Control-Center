import React from 'react';


const Dashboard = () => {

    //const [data, setData] = useState([])


    // useEffect(() => {
    //     const dataUrl = `http://localhost:3100/characters`
    //     fetch(dataUrl).then((data) => {
    //         return data.json();
    //     }).then((myData) => {
    //         setData(myData.Items);
    //     })
    // }, [])

    return (
        <>
            <h1 style={{ color: 'white', fontSize: '40px' }}>Hey...{sessionStorage.getItem("username")}</h1>
            {/* <table style={{ color: 'white' }} border={2}>
                <tbody>
                    <tr>
                        <th>Id</th><th>Completed</th><th>userId</th><th>title</th>
                    </tr>
                    {
                        data.map(sampleData => {
                            return (
                                <tr key={sampleData.id}>
                                    <td>{sampleData.id}</td>
                                    <td>{sampleData.completed}</td>
                                    <td>{sampleData.userId}</td>
                                    <td>{sampleData.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> */}
        </>

    )
}

export default Dashboard;