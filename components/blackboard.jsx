import React from 'react';
import { Card, Space, Avatar, Tag } from 'antd';
import { StarOutlined, BranchesOutlined, EyeOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from '../public/styles/blackboard.css';

export default props => {
  return (
    <Card
      className={classes.githubCard}
      actions={[
        <IconText icon={EyeOutlined} text="2" key="EyeOutlined" />,
        <IconText icon={StarOutlined} text="156" key="StarOutlined" />,
        <IconText icon={BranchesOutlined} text="7" key="BranchesOutlined" />,
      ]}
    >
      <Card.Meta
        avatar={<Avatar size="large" src={props.avatar} />}
        title={props.repo.title}
        description={props.repo.description}
      />
      <div className={classes.tagView}>
        <Tag className={classes.tagLine} color="volcano">
          vue
        </Tag>
        <Tag className={classes.tagLine} color="orange">
          javascript
        </Tag>
        <Tag className={classes.tagLine} color="gold">
          vuejs
        </Tag>
        <Tag className={classes.tagLine} color="lime">
          ui design
        </Tag>
        <Tag className={classes.tagLine} color="green">
          open source
        </Tag>
        <Tag className={classes.tagLine} color="cyan">
          vue-component
        </Tag>
        <Tag className={classes.tagLine} color="blue">
          ui-kit
        </Tag>
        <Tag className={classes.tagLine} color="geekblue">
          element-ui
        </Tag>
        <Tag className={classes.tagLine} color="purple">
          desktop
        </Tag>
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
