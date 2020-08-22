import React, { useEffect, useState } from 'react';
import { Card, Space, Avatar, Tag } from 'antd';
import { StarOutlined, BranchesOutlined, EyeOutlined } from '@ant-design/icons';
import axios from 'axios';
import 'antd/dist/antd.css';
import classes from '../public/styles/blackboard.css';

const ClientID = '095e78751050b0ea6006';
const ClientSecret = 'b7dca1a93ae62fa9fd841b61d8fc25f9e6dd7b0b';

export default props => {
  const getRepoData = async ({ user, repo }) => {
    const res = await Promise.all([
      axios.get(
        `https://api.github.com/repos/${user}/${repo}?client_id=${ClientID}&client_secret=${ClientSecret}`,
      ),
      axios.get(`https://api.github.com/repos/juejin-im/open-source/topics`, {
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json',
        },
      }),
    ]);
    const data = {
      ...res[0].data,
      tags: res[1].data?.names,
    };
    return data;
  };

  const [githubData, setGithubData] = useState({});
  useEffect(() => {
    getRepoData(props).then(data => {
      setGithubData(data);
    });
  }, []);

  return (
    <Card
      className={classes.githubCard}
      actions={[
        <IconText
          icon={EyeOutlined}
          text={githubData.subscribers_count}
          key="EyeOutlined"
        />,
        <IconText
          icon={StarOutlined}
          text={githubData.stargazers_count}
          key="StarOutlined"
        />,
        <IconText
          icon={BranchesOutlined}
          text={githubData.forks}
          key="BranchesOutlined"
        />,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar size="large" src={githubData.organization?.avatar_url} />
        }
        title={props.repo}
        description={githubData.description}
      />
      <div className={classes.tagView}>
        {githubData.tags
          ? githubData.tags.map((item, index) => (
              <Tag
                key={index.toString()}
                className={classes.tagLine}
                color="volcano"
              >
                {item}
              </Tag>
            ))
          : null}
      </div>
    </Card>
  );
};

/**
 *
 * @param {  } param0
 */
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
