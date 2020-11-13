import cloudbase from "@cloudbase/js-sdk";
export function useCloudBase() {
    const app = cloudbase.init({
        env: "cloud-dev-1gokvxnv79e12706"
    });
    return app;
}