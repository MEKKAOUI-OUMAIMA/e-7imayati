import React from "react";

import firebase from "firebase/app";
import "firebase/database";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from "@react-firebase/database";
import { config } from "../firebase_config";
const Data = () => {
  const [limit, setLimit] = React.useState(1);
  const s = (a) => JSON.stringify(a);
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...config}>
      <FirebaseDatabaseNode
        path="IOT/"
        orderByKey
        // orderByValue={"created_on"}
      >
        {(d) => {
          return (
            <React.Fragment>
              <pre>Path {d.path}</pre>
              <pre style={{ height: 300, overflow: "auto" }}>
                Value {s(d.value)}
                Value {d.value ? s(d.value["AirQuality = "]) : ""}
              </pre>
              <button
                onClick={() => {
                  setLimit(limit + 2);
                }}
              >
                Load more
              </button>
            </React.Fragment>
          );
        }}
      </FirebaseDatabaseNode>
      <FirebaseDatabaseNode
        path="camera/"
        orderByKey
        // orderByValue={"created_on"}
      >
        {(d) => {
          return (
            <React.Fragment>
              <pre>Path {d.path}</pre>
              <pre style={{ height: 300, overflow: "auto" }}>
                Value {s(d.value)}
              </pre>
              {d.value ? <pre>D = {Object.keys(d.value).length}</pre> : ""}
              {d.value
                ? Object.keys(d.value).map((k) => (
                    <>
                      <h3>{k}</h3>
                      <p>{JSON.stringify(d.value[k])}</p>
                    </>
                  ))
                : ""}
              <button
                onClick={() => {
                  setLimit(limit + 2);
                }}
              >
                Load more
              </button>
            </React.Fragment>
          );
        }}
      </FirebaseDatabaseNode>
    </FirebaseDatabaseProvider>
  );
};

export default Data;
