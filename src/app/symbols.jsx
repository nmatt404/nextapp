import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default async function Page(props) {
  const builderModelName = "symbol";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName)
    // Convert the result to a promise
    .toPromise();
console.log (content)
  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
