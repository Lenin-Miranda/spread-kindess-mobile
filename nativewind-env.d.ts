/// <reference types="nativewind/types" />

declare module '*.css';
declare module '*.png' {
  const content: import("react-native").ImageSourcePropType;
  export default content;
}
