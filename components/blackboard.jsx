import React, { useEffect, useState } from 'react';
import { Card, Space, Avatar, Tag } from 'antd';
import {
  StarOutlined,
  BranchesOutlined,
  EyeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import cheerio from 'cheerio';
import rq from 'request-promise';
import 'antd/dist/antd.css';
import classes from '../public/styles/blackboard.css';

export default props => {
  const getRepoData = async ({ user, repo }) => {
    const $ = await rq({
      uri: `https://github.com/${user}/${repo}`,
      transform: function(body) {
        return cheerio.load(body, {
          ignoreWhitespace: true,
        });
      },
    });
    const tags = [];
    $('.topic-tag.topic-tag-link').each(function(i, elem) {
      tags[i] = $(this)
        .text()
        .replace(/\r\n/g, '')
        .replace(/\n/g, '')
        .replace(/ /g, '');
    });
    return {
      watching: $('ul.pagehead-actions > li:nth-child(1) a.social-count')
        .text()
        .replace(/\r\n/g, '')
        .replace(/\n/g, '')
        .replace(/ /g, ''),
      stars: $('ul.pagehead-actions > li:nth-child(2) a.social-count')
        .text()
        .replace(/\r\n/g, '')
        .replace(/\n/g, '')
        .replace(/ /g, ''),
      forks: $('ul.pagehead-actions > li:nth-child(2) a.social-count')
        .text()
        .replace(/\r\n/g, '')
        .replace(/\n/g, '')
        .replace(/ /g, ''),
      description: $('p.f4.mt-3')
        .text()
        .replace(/\r\n/g, '')
        .replace(/\n/g, '')
        .replace(/ /g, ''),
      tags: tags,
    };
  };
  const getAvatar = async ({ user }) => {
    const $ = await rq({
      uri: `https://github.com/${user}`,
      transform: function(body) {
        return cheerio.load(body);
      },
    });
    return $('img.TableObject-item.avatar').attr('src');
  };

  const [githubData, setGithubData] = useState({});
  const [avatar, setAvatar] = useState('');
  useEffect(() => {
    getRepoData(props).then(data => {
      setGithubData(data);
    });
    getAvatar(props).then(avatar => {
      console.log('[blackboard]', avatar);
      setAvatar(avatar);
    });
  }, []);

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
        avatar={<Avatar size="large" src={avatar} />}
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
