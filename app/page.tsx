import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("http://localhost:3000/api/v1/user/details")
	return response.data;
}


export default async function Home() {
  const userData = await getUserDetails();
  

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
              <code>

                <div>
                    Name: {userData?.name}
                </div>
                
                {userData?.email}
              </code>
            </div>
        </div>
    </div>
  );
}
