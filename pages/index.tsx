import { Profile } from "@/components/Profile"
import Head from "next/head"

export default function Home() {
	return (
		<>
			<Head>
				<title>Lear Nextjs</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<div>
        <h1>My Profile</h1>
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
				<Profile />
			</div>
		</>
	)
}
