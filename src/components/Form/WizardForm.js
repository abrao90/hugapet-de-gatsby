import React from 'react'
import Styles from './Styles'
import { Field } from 'react-final-form'
import Wizard from './Wizard'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const ButtonOptions = ["Untersucheng", "Kastration", "Impung", "Der Letze Weg", "Andere"]

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
)

/* 


INQUIRY
1. Step 1 -> name, phone, zip, service
2. Step 2 -> date, session, online video consultation
3. Step 3 -> pet details
4. Summary -> OTP validation, user gets created

CONFIRMED
1. Step 1 -> in progress - Video consultation, date is confirmed
2. Step 2 -> visit complete, summary
3. Step 3 -> additional visit
4. Summary

*/

const required = value => (value ? undefined : 'Required')

const WizardForm = () => (
  <Styles>
    <h1>Make an appointment with the Vet</h1>
    <h2></h2>
    <a href="#">
    Free video consultation on confirmed appointment
    </a>
    <p>
    We can honor the appointment upto one hour after inquiry time.
    </p>
    <Wizard
      initialValues={{ employed: true, stooge: 'larry' }}
      onSubmit={onSubmit}
    >
      <Wizard.Page>
        <div>
          <label>First Name</label>
          <Field
            name="Name"
            component="input"
            type="text"
            placeholder="Full Name"
            validate={required}
          />
          <Error name="Name" />
        </div>
        <div>
          <label>Zip Code</label>
          <Field
            name="zipcode"
            component="input"
            type="text"
            placeholder="Zip Code"
            validate={required}
          />
          <Error name="zipcode" />
        </div>
        <div>
          <label>Phone number</label>
          <Field
            name="phone"
            component="input"
            type="text"
            placeholder="Mobile number"
            validate={required}
          />
          <Error name="phone" />
        </div>
        <div>
          <label> Service </label>
          <Field name='service' component="select" validate={required} placeholder="Choose...">
            <option>Select...</option>
            <option value="Untersucheng">Untersucheng</option>
            <option value="Impung">Impung</option>
            <option value="Der Letze Weg">Der Letze Weg</option>
            <option value="Andere">Andere</option>
          </Field>
        </div>", 

      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.session) {
            errors.session = 'Required'
          }
          return errors
        }}
      >
        <div>
          <label>Date of booking</label>
          <Field
            name="Date"
            component="input"
            type="date"
            placeholder="Date"
          />
          <Error name="email" />
        </div>
        <div>
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
          <Error name="email" />
        </div>
        <div>
          <label>Session</label>
          <Field name="session" component="select">
            <option>Choose time</option>
            <option value="#ff0000">Morning</option>
            <option value="#00ff00">Afternoon</option>
            <option value="#0000ff">Evening</option>
          </Field>
          <Error name="session" />
        </div>
        <div>
          <label>Video consultation?</label>
          <Field name="videoconsultation" component="input" type="checkbox" /><div align="left">Yes</div>
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.type) {
            errors.type = 'Required'
          }
          if (!values.gender) {
            errors.gender = 'Required'
          }
          if (!values.age) {
            errors.age = 'Required'
          }
          return errors
        }}
      >
        <div>
        <label>What year was your pet born?</label>
          <Field
            name="petdate"
            component="input"
            type="date"
            placeholder="YYYY"
          />
        </div>
        <div>
          <label>Type</label>
          <Field name="type" component="select" >
            <option value="dog">Dog</option>
            <option value="cat">🍄 Cat</option>
            <option value="rabbit">🧀 Rabbit</option>
            <option value="bird">🐓 Bird</option>
            <option value="other">🍍 Other</option>
          </Field>
          <Error name="type" />
          <label>Gender</label>
          <Field name="gender" component="select" >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          <Error name="gender" />
        </div>
        <div>
          <label>Tell us more about your pet. Her breed, health issues etc.</label>
          <Field name="notes" type="text"placeholder="My dog is a Golden retriever..." component="input" /> 
        </div>
      </Wizard.Page>
      <Wizard.Page
        validate={values => {
          const errors = {}
          if (!values.notes) {
            errors.notes = 'Required'
          }
          return errors
        }}
      >
        <div>
          <label>Best Stooge?</label>
          <div>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="larry"
              />{' '}
              Larry
            </label>
            <label>
              <Field name="stooge" component="input" type="radio" value="moe" />{' '}
              Moe
            </label>
            <label>
              <Field
                name="stooge"
                component="input"
                type="radio"
                value="curly"
              />{' '}
              Curly
            </label>
          </div>
        </div>
        <div>
          <label>Notes</label>
          <Field name="notes" component="textarea" placeholder="Notes" />
          <Error name="notes" />
        </div>
      </Wizard.Page>
    </Wizard>
  </Styles>
)

export default WizardForm

