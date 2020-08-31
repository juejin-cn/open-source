import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.jsx';

export default props => {
  const [githubData, setGithubData] = useState([]);
  useEffect(() => {
    axios
      .get(
        window.location.host === "juejin_im.gitee.io"
          ? 'https://gitee.com/juejin_im/repo-data/raw/master/repos.json'
          : 'https://raw.githubusercontent.com/juejin-im/repo-data/master/repos.json',
      )
      .then(({ data }) => {
        setGithubData(data);
      });
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridGap: '20px',
        gridTemplateRows: 'repeat(auto-fit, 1fr)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      }}
    >
      {props.repos.map(repo => {
        return (
          <Card
            key={repo}
            data={githubData.find(item => item.full_name === repo)}
          />
        );
      })}
    </div>
  );
};
