import React, { useState, useEffect, useRef } from "react";
import * as api from "../services/agencyDataAPI";
import * as d3 from "d3";

const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const [data] = useState([1, 6]);
  const svgRef = useRef();

  useEffect(() => {
    api.allPosts().then((data) => {
      data.map((post) => {
        return setAllPosts(post);
      });
    });
  }, []);

  useEffect(() => {
    //setting the svgs
    const w = 400;
    const h = 100;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#d3d3d3")
      .style("margin-top", "50")
      .style("margin-bottom", "50")
      .style("overflow", "visible");

    //setting the scalling

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);

    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);

    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);

    // setting the axes

    const xAxis = d3
      .axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((i) => i + 1);

    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);
    svg.append("g").call(yAxis);
    // setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  console.log(allPosts);

  // let listOfPosts = allPosts.map((post) => {
  //   return (
  //     <tbody key={post.id}>
  //       <tr>
  //         <th>ID</th>
  //         <th>Name</th>
  //         <th>Description</th>
  //       </tr>
  //       <tr>
  //         <td>{post.id}</td>
  //         <td>{post.postname}</td>
  //         <td>{post.description}</td>
  //       </tr>
  //     </tbody>
  //   );
  // });

  return (
    <div className="allposts">
      <h3>List of all Posts</h3>
      {/* <table border="2">{listOfPosts}</table> */}
      <div className="my-svg" style={{ backgroundColor: "white" }}>
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

export default AllPosts;
