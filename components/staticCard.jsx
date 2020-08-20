import React from 'react';
import { Card, Space, Avatar, Tag } from 'antd';
import { StarOutlined, BranchesOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from '../public/styles/blackboard.css';

const StaticCard = props => {
  return (
    <Card
      className={classes.githubCard}
      actions={[
        <IconText
          icon={EyeOutlined}
          text={props.repo.watching}
          key="EyeOutlined"
        />,
        <IconText
          icon={StarOutlined}
          text={props.repo.stars}
          key="StarOutlined"
        />,
        <IconText
          icon={BranchesOutlined}
          text={props.repo.fork}
          key="BranchesOutlined"
        />,
      ]}
    >
      <Card.Meta
        avatar={<Avatar size="large" src={props.repo.avatar} />}
        title={props.repo.title}
        description={props.repo.description}
      />
      <div className={classes.tagView}>
        {props.tagList.map(item => {
          return (
            <Tag className={classes.tagLine} color="blue" key={item}>
              {item}
            </Tag>
          );
        })}
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

export default StaticCard;
