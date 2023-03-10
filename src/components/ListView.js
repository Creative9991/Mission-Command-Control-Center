import React from "react";
import { spaceAgencies } from "../constants/spaceAgency";
import { planets } from "../constants/planets";

const ListView = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchCall = async () => {
        const pullingList = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await pullingList.json();
        this.setState({ ...this.state, data: json });
      };
      fetchCall();
    }
    render() {
      let { term, data } = this.state;

      let filteredData = data.filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <>
          <h2>{entity} HOC Component</h2>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </>
      );
    }
  };
};

export default ListView;
