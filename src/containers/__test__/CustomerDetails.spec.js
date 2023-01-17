import { render, screen } from '@testing-library/react';
import CustomerDetails from '../CustomerDetails';
import userEvent from '@testing-library/user-event'



describe('CustomerDetails', () => {
  it('renders Registration Component on load', () => {
    render(<CustomerDetails />);
    const regoComponent = screen.getByTestId('rego-cmp')
    expect(regoComponent).toBeInTheDocument();
  });

  it('renders Postcode Component on Post toggle Click', async () => {
    render(<CustomerDetails />);
    await userEvent.click(screen.getByRole('button', {name: 'Postcode'}))
    const postComponent = screen.getByTestId('post-cmp')
    expect(postComponent).toBeInTheDocument();
  });

  it('renders Registration Component on Registration toggle Click', async () => {
    render(<CustomerDetails />);
    await userEvent.click(screen.getByRole('button', {name: 'Postcode'}))
    await userEvent.click(screen.getByRole('button', {name: 'Registration number'}))
    const regoComponent = screen.getByTestId('rego-cmp')
    expect(regoComponent).toBeInTheDocument();
  });

});