import React from 'react'

const Home = () => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center h-screen w-full bg-red-400">
            <img src="https://imgs.search.brave.com/4ATIxs0SwT-DsZ4ajF7jlixEaXFqw5Ys2I5OFQa8JEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" className="logo"/>
            <div className="">
                <h1 className="text-black">Welcome to the Uber App</h1>
                <button className="">CONTINUE</button>   
            </div>
        </div>
    </div>
  )
}

export default Home