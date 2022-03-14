import styled from "styled-components";

export const CategoryItemContainer = styled.div`
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

export const CategoryItemTitle = styled.h2`
  font-size: 17px;
  font-weight: 400;
  transition: .2s;

  color: rgba(0, 0, 0, 0.85);
`

export const CategoryItemSettings = styled.div`
  display: flex;
  margin-left: auto;
`