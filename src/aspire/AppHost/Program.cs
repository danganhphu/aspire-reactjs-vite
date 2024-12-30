var builder = DistributedApplication.CreateBuilder(args);

builder.AddNpmApp("react-vite", "../../react-vite", "dev")
    .WithEnvironment("BROWSER", "none") // Disable opening browser on npm start
    .WithHttpEndpoint(env: "VITE_PORT")
    .WithExternalHttpEndpoints();

await builder.Build().RunAsync().ConfigureAwait(false);