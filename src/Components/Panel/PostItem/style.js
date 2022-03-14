import styled from "styled-components";

export const PostItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: .2s;

  border: 1px solid var(--border-light);

  &:hover {
    background: var(--hover-soft);
  }
`

export const PostItemBanner = styled.div`
  width: 85px;
  height: 55px;
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-right: 15px;
`

export const PostItemBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const PostItemDetails = styled.div`
  width: 500px;
`

export const PostItemDetailsTitle = styled.h2`
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.85);
`

export const PostItemDetailsDate = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.6);
`