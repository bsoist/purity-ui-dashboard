// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  ClockIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"My Money"}
          amount={"$5,453,000"}
          percentage={20}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Club's Money"}
          amount={"214,456,300"}
          percentage={45.5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Members"}
          amount={"+8"}
          percentage={14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Transactions"}
          amount={"$173,000"}
          percentage={8}
          icon={<ClockIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='12px'
        gap='24px'>
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"Active Members"}
          percentage={8}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"Overview"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"Network"}
          amount={30}
          captions={["Clubs", "Members", "Volume", "% of network"]}
          data={dashboardTableData}
        />
        <OrdersOverview
          title={"Overview"}
          amount={30}
          data={timelineData}
        />
      </Grid>
    </Flex>
  );
}
