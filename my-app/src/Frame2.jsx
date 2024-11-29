import './Frame2.css'
import cfglogo from "./images/cfglogo_transparent.png"
import home_button from "./images/home_button.png"

function Frame2() {
  
    return (
    <>
        <nav class="navbar">
            <div class="container-fluid">
              <a href="index">
                  <img class="ps-2 pe-4" height="60" src={cfglogo} alt="Code For Good"/>
              </a>
              <a href="./Frame1.jsx" class="home-button">
                  <img src={home_button} alt="Button Image"/>
              </a>
            </div>
        </nav>

        <div class="text"> 
            Search For Applicant
        </div>
        <div class="input_file"> 
            <input type="text" placeholder="Type in name..."/>
        </div>
    </>
    )
  }
  
export default Frame2

// function Frame2({ csvData }) {
//     const [names, setNames] = useState([]);
//     const [filteredNames, setFilteredNames] = useState([]);
//     const [query, setQuery] = useState("");
  
//     // Parse CSV data and extract names
//     useEffect(() => {
//       if (csvData) {
//         const rows = csvData.split("\n");
//         const parsedNames = rows
//           .map((row) => row.split(",")[0]?.trim())
//           .filter((name) => name);
//         setNames(parsedNames);
//         setFilteredNames(parsedNames);
//       }
//     }, [csvData]);
  
//     const handleSearch = (event) => {
//       const value = event.target.value.toLowerCase();
//       setQuery(value);
//       setFilteredNames(
//         names.filter((name) => name.toLowerCase().includes(value))
//       );
//     };