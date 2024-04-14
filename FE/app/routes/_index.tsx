import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <a href="http://localhost:5173/rest">
          <li>REST</li>
        </a>
        <a href="http://localhost:5173/gql">
          <li>GQL</li>
        </a>
      </ul>
    </div>
  );
}
