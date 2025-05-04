import {
  Description,
  Name,
  Tag,
  Stats,
  ListElement,
  Location,
} from "./Profile.styled";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats>
        <ListElement>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </ListElement>
        <ListElement>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </ListElement>
        <ListElement>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </ListElement>
      </Stats>
    </div>
  );
};
