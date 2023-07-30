import { Grid, TextField, VBox } from "@elf-framework/ui";

export function ValueView() {
  return (
    <Grid columns={1} gap={30}>
      <VBox
        style={{
          gap: 30,
          backgroundColor: "var(--color-gray-0)",
          padding: "30px 20px",
          fontSize: 13,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
            padding: [20, 40],
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <TextField label="Email address" value="xxx@elf-framework.com" />
          </div>
        </div>
      </VBox>
      <div>
        <p>
          <p>The value shows a user’s entered text.</p>
        </p>
      </div>
    </Grid>
  );
}
