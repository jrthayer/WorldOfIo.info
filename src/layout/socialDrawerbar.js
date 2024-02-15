import React from "react";

//====== Layout Components
// shared
import DrawerBar from "components/drawerbars/drawerBar";

//====== Data
// arrays
import socialData from "data/social.js";

const SocialDrawerbar = () => {
    return (
        <DrawerBar
            title="Social Links"
            data={socialData}
            type="transparent"
            width="300px"
        ></DrawerBar>
    );
};

export default SocialDrawerbar;
