import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
          <div class="ui container workout">
            <div class="ui raised card m-auto">
                <div class="prev-workout">
                  <h3>Last Workout</h3>
                  <div>
                    <div class="workout-stats"></div>
                    <div class="buttons">
                      <a href="/exercise?" class="huge ui blue button">Continue Workout</a>
                      <a href="/exercise" class="huge positive ui button">New Workout</a>
                    </div>
                  </div>
                </div>
                <div class="new-workout">
                  <h3>Create Your First Workout</h3>
                </div>
              </div>
        </div>
  );
}

export default About;
