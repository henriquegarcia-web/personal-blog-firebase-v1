import styled from "styled-components";

export const AddPostModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 100;

  background: rgba(0, 0, 0, 0.4);
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  height: 800px;
  padding: var(--padding);
  border-radius: var(--border-radius);

  background-color: white;
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: var(--border-radius);

  border: 1px solid var(--border-soft);

  Button {
    &:nth-of-type(1) {
      margin-left: auto;
    }
    &:nth-of-type(2) {
      margin-left: 10px;
    }
    &:nth-of-type(3) {
      margin-left: 20px;
    }
  }

  `

export const ModalHeaderTitle = styled.h4`
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;

  color: rgba(0, 0, 0, 0.4);
  `

export const ModalPostDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 20px; */
`

export const ModalPostSelectors = styled.div`
  display: flex;
  margin: 20px 0;

  /* border: 2px solid orange; */
`

export const ModalCategories = styled.div`
  width: 220px;
  margin-right: 20px;
  /* border: 2px solid blue; */
`

export const ModalTags = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 240px);
  padding-left: 20px;

  border-left: 1px solid var(--border-soft);
`