import React, { useEffect, useState } from 'react';
import { Card, Space, Avatar, Tag } from 'antd';
import { StarOutlined, BranchesOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from '../public/styles/blackboard.css';

export default ({ data, tags }) => {
  console.log('[blackboard]', data);
  return (
    <a href={`https://github.com/${data?.full_name}`} target="_blank">
      <Card
        className={classes.githubCard}
        actions={[
          <IconText
            icon={EyeOutlined}
            text={data?.watchers}
            key="EyeOutlined"
          />,
          <IconText
            icon={StarOutlined}
            text={data?.stars}
            key="StarOutlined"
          />,
          <IconText
            icon={BranchesOutlined}
            text={data?.forks}
            key="BranchesOutlined"
          />,
        ]}
      >
        <Card.Meta
          avatar={<Avatar size="large" src={data?.avatar_url} />}
          title={data?.full_name}
          description={data?.description}
        />
        <div className={classes.tagView}>
          {tags
            ? tags.map((item, index) => (
                <Tag
                  key={index.toString()}
                  className={classes.tagLine}
                  color="blue"
                >
                  {item}
                </Tag>
              ))
            : null}
        </div>
      </Card>
    </a>
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
