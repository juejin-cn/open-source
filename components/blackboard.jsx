import React, { useEffect, useState } from 'react';
import { Card, Space, Avatar, Tag } from 'antd';
import { StarOutlined, BranchesOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from '../public/styles/blackboard.css';

export default props => {
  return (
    <Card
      className={classes.githubCard}
      actions={[
        <IconText
          icon={EyeOutlined}
          text={githubData.watching}
          key="EyeOutlined"
        />,
        <IconText
          icon={StarOutlined}
          text={githubData.stars}
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
        avatar={<Avatar size="large" src={props.avatar} />}
        title={props.repo.title}
        description={props.repo.description}
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
 * 图标文字组件
 * @param { Object } params 图标文字
 */
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
